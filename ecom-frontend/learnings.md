# new learnings:
    -While loading the page go in in network tab and see the pages 
    - all pages are rendering but when you want to see only the home page ,all pages are rendering so use the react lazy . Hete is the example usage

```
import {lazy} from 'react';
const Cart = lazy(()=> import("./pages/Cart"))
 <Route path="/cart" element = {<Cart />}/>
```
    -now in home page network section you wont see the cart page , now add in the url /cart , the cart.tsx page would be shown

    -react -suspense used to show while loading of page 
    <Suspense fallback={<Loader />}>
