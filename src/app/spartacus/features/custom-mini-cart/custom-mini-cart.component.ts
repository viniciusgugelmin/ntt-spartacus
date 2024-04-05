import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import {ICON_TYPE} from "@spartacus/storefront";

@Component({
  selector: 'cx-mini-cart',
  templateUrl: './custom-mini-cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomMiniCartComponent {
  iconTypes = ICON_TYPE;

  quantity$: Observable<number> = this.activeCartService.getActive().pipe(
    startWith({ deliveryItemsQuantity: 0 }),
    map((cart) => cart.deliveryItemsQuantity || 0)
  );

  total$: Observable<string | undefined> = this.activeCartService.getActive().pipe(
    filter((cart) => !!cart.totalPrice),
    map((cart) => cart.totalPrice?.formattedValue)
  );

  constructor(protected activeCartService: ActiveCartService) {}
}
