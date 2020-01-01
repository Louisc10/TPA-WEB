import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("149129936518-rnjs6vgn6vu1cp0o9t0kllhnfbbh78nr.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1267232523486909")
  }
]);
 
export function provideConfig() {
  return config;
}
 
@NgModule({
  declarations: [],
  imports: [
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
})
export class SocialmediaModule { }
