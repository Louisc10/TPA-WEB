import { Component, OnInit, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { EntertainmentFilterServiceService } from 'src/app/service/entertainment-filter-service.service';

export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}

export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    const data = this.buildFileTree(TREE_DATA, 0);
    this.dataChange.next(data);
  }
  buildFileTree(obj: { [key: string]: any }, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

}

const TREE_DATA = {
  Indonesia: {
    'Bali': null,
    'Banten': null,
    'Jakarta': null,
    'Jawa Barat': null,
    'Jawa Tengah': null,
    'Jawa Timur': null,
    'Kalimantan Timur': null,
    'Nusa Tenggara Barat': null,
    'Sumatera Utara': null,
    'Yogyakarta': null,
  },
  Singapore: {
    'Central Singapore': null,
    'Central-Business': null,
  },
  Malaysia: {
    'Johor': null,
    'Kedah': null,
    'Kuala Lumpur': null,
    'Melaka': null,
    'Penang': null,
    'Perak': null,
    'Sabah': null,
    'Sarawak': null,
    'Selangor': null,
    'Sepang': null,
  },
  Hongkong: {
    'Hong Kong Island': null,
    'Central and Western': null,
    'Lantau Islands': null,
  },
  Thailand: {
    'BuriRam': null,
    'Chiang Mai': null,
    'Chonburi': null,
    'Koh Samui': null,
    'Krabi': null,
    'Nakhon Pathom': null,
    'Phuket': null,
  },
  Japan: {
    'Kyoto': null,
    'Osaka': null,
    'Tokyo': null,
  }
};

@Component({
  selector: 'app-entertaiment-filter',
  templateUrl: './entertaiment-filter.component.html',
  styleUrls: ['./entertaiment-filter.component.sass'],
  providers: [ChecklistDatabase]
})

@Injectable({
  providedIn: 'root'
})
export class EntertaimentFilterComponent implements OnInit {


  constructor(private _database: ChecklistDatabase , private data: EntertainmentFilterServiceService) {
    this.resetTree();
  }

  ngOnInit() {
  }
  // autoTicks = this.data.autoTicks;
  // disabled = this.data.disabled;
  // invert = this.data.invert;
  // max = this.data.max;
  // min = this.data.min;
  // showTicks = this.data.showTicks;
  // step = this.data.step;
  // thumbLabel = this.data.thumbLabel;
  // value = this.data.value;
  // value1 = this.data.value1;
  // vertical = this.data.vertical;
  // tickInterval = this.data.tickInterval;

  // date1 = this.data.date1;
  // date2 = this.data.date2;

  // activities = this.data.activities;
  // attractions = this.data.attractions;
  // events = this.data.events;

  // penawaran = this.data.penawaran;



  getSliderTickInterval(): number | 'auto' {
    return this.data.showTicks ? (this.data.autoTicks ? 'auto' : this.data.tickInterval) : 0;
  }

  changeSlider(event: any) {
    if (this.data.value1 < event.value) {
      this.data.value = this.data.value1
    } else {
      this.data.value = event.value
    }
  }

  changeSlider1(event: any) {
    if (this.data.value > event.value) {
      this.data.value1 = this.data.value
    } else {
      this.data.value1 = event.value
    }
  }

  myFilter1 = (d: Date): boolean => {
    let now = new Date();
    now.setDate(now.getDate() - 1);
    let now1 = new Date();
    now1.setFullYear(now.getFullYear() + 1);
    return d > now && d < now1;
  }

  myFilter2 = (d: Date): boolean => {
    let now = this.data.date1;
    let tres = now;
    tres.setDate(tres.getDate() + 16);

    console.log("Now: " + now)
    console.log("Tre: " + tres)
    return d > now && d < tres;

  }


  reset(): void {
    this.data.autoTicks = false;
    this.data.disabled = false;
    this.data.invert = false;
    this.data.max = 100000000;
    this.data.min = 0;
    this.data.showTicks = false;
    this.data.step = 100000;
    this.data.thumbLabel = false;
    this.data.value = 0;
    this.data.value1 = 100000000;
    this.data.vertical = false;
    this.data.tickInterval = 1;

    this.data.date1 = null;
    this.data.date2 = null;

    this.data.activities = false;
    this.data.attractions = false;
    this.data.events = false;

    this.data.penawaran = false;

    this.resetTree();
  }

  resetTree(){

    this.flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();
    this.nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();  
    this.checklistSelection = new SelectionModel<TodoItemFlatNode>(true);


    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this._database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  selectedParent: TodoItemFlatNode | null = null;

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  checklistSelection = new SelectionModel<TodoItemFlatNode>(true);

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
      ? existingNode
      : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    return descAllSelected;
  }

  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    this.checkAllParentsSelection(node);
  }

  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
}
