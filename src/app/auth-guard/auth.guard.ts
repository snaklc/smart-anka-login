import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStoreManagerService } from '../token-store-manager/token-store-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenStoreManagerService: TokenStoreManagerService, private router: Router) { }

  canActivate( next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean{

    const token = this.tokenStoreManagerService.getToken();
    if (token===null){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

type UserType = 'operator' | 'superadmin' | 'company';

 class BaseUserTypeAuthGuard implements CanActivate{
  constructor(private tokenStoreManagerService: TokenStoreManagerService,
    private router: Router, private expectedUserType: UserType) { }
  canActivate(): Promise<boolean> | boolean {
    const userInformation = this.tokenStoreManagerService.getUserInformation();
    const userType = userInformation.user_type;
    if (userType !== this.expectedUserType) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SuperadminGuard extends BaseUserTypeAuthGuard implements CanActivate {
  constructor(tokenStoreManagerService: TokenStoreManagerService, router: Router) {
    super(tokenStoreManagerService, router, 'superadmin');
  }
}

@Injectable({
  providedIn: 'root'
})
export class OperatorGuard extends BaseUserTypeAuthGuard implements CanActivate {
  constructor(tokenStoreManagerService: TokenStoreManagerService, router: Router) {
    super(tokenStoreManagerService, router, 'operator');
  }
}

@Injectable({
  providedIn: 'root'
})
export class CompanyGuard extends BaseUserTypeAuthGuard implements CanActivate {
  constructor(tokenStoreManagerService: TokenStoreManagerService, router: Router) {
    super(tokenStoreManagerService, router, 'company');
  }
}
