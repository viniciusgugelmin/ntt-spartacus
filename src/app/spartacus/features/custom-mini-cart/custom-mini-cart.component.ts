import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MiniCartComponent} from "@spartacus/storefront";

@Component({
  selector: 'cx-mini-cart',
  templateUrl: './custom-mini-cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomMiniCartComponent extends MiniCartComponent {
}
