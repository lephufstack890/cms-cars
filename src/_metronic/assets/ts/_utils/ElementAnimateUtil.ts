import { DOMEventHandlerUtil } from '@/_metronic/assets/ts/_utils/_DOMEventHandlerUtil';
import { ElementStyleUtil } from '@/_metronic/assets/ts/_utils/_ElementStyleUtil';
import { getElementOffset } from '@/_metronic/assets/ts/_utils/DomHelpers';
import { IFunction } from '@/models';

export class ElementAnimateUtil {
  public static animate(
    from: number,
    to: number,
    duration: number,
    update: IFunction,
    complete?: IFunction
  ) {
    /**
     * TinyAnimate.easings
     *  Adapted from jQuery Easing
     */
    const easings = {
      linear(t: number, b: number, c: number, d: number) {
        return (c * t) / d + b;
      },
    };

    // Create mock done() function if necessary
    if (!complete) {
      complete = function () {
        /*empty*/
      };
    }

    // Animation loop
    // let canceled = false;
    const change = to - from;

    function loop(timestamp: number) {
      const time = (timestamp || +new Date()) - start;

      if (time >= 0) {
        update(easings.linear(time, from, change, duration));
      }
      if (time >= 0 && time >= duration) {
        update(to);
        if (complete) {
          complete();
        }
      } else {
        window.requestAnimationFrame(loop);
      }
    }

    update(from);

    // Start animation loop
    const start =
      window.performance && window.performance.now ? window.performance.now() : +new Date();

    window.requestAnimationFrame(loop);
  }

  public static animateClass(
    element: HTMLElement,
    animationName: string,
    callBack?: IFunction
  ): void {
    const animateClasses = animationName.split(' ');
    animateClasses.forEach((cssClass) => element.classList.add(cssClass));
    DOMEventHandlerUtil.one(element, 'animationend', () => {
      animateClasses.forEach((cssClass) => element.classList.remove(cssClass));
    });

    if (callBack) {
      DOMEventHandlerUtil.one(element, 'animationend', callBack);
    }
  }

  public static transitionEnd(element: HTMLElement, callBack: IFunction) {
    DOMEventHandlerUtil.one(element, 'transitionend', callBack);
  }

  public static animationEnd(element: HTMLElement, callBack: IFunction) {
    DOMEventHandlerUtil.one(element, 'animationend', callBack);
  }

  public static animationDelay(element: HTMLElement, value: string) {
    ElementStyleUtil.set(element, 'animation-delay', value);
  }

  public static animationDuration(element: HTMLElement, value: string) {
    ElementStyleUtil.set(element, 'animation-duration', value);
  }

  public static scrollTo(element: HTMLElement | null, offset: number, duration = 500) {
    let targetPos = element ? getElementOffset(element).top : 0;
    let scrollPos =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (offset) {
      scrollPos += offset;
      targetPos = targetPos - offset;
    }

    const from = scrollPos;
    const to = targetPos;

    ElementAnimateUtil.animate(from, to, duration, (value: number) => {
      document.documentElement.scrollTop = value;
      // document.body.parentNode.scrollTop = value;
      document.body.scrollTop = value;
    }); //, easing, done
  }
  public static scrollTop(offset: number, duration: number) {
    ElementAnimateUtil.scrollTo(null, offset, duration);
  }
}