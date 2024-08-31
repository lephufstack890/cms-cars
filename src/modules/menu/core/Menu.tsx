import { FC, useEffect } from 'react';

import { WithChildren } from '@/_metronic/helpers';
import { useMenu } from '@/hooks/useMenu';
import { MenuModel } from '@/models';
import { trans } from '@/utils';

const MenuInit: FC<WithChildren> = ({ children }) => {
  const { setMenuList } = useMenu();

  const menuList: MenuModel[] = [
    // DASHBOARD
    {
      aside: { fontIcon: 'bi-app-indicator', icon: '/media/icons/duotune/art/art002.svg' },
      title: trans('MENU.DASHBOARD'),
      to: '/dashboard',
    },
    // APPS
    {
      aside: { isContent: true },
      children: [
        // EMPLOYEES
        {
          aside: { fontIcon: 'bi-chat-left' },
          children: [
            {
              hasBullet: true,
              title: trans('MENU.EMPLOYEE.LIST'),
              to: '/employees',
            },
          ],
          icon: '/media/icons/duotune/general/gen049.svg',
          menu: {
            hasArrow: true,
            menuPlacement: 'right-start',
            menuTrigger: `{default:'click', lg: 'hover'}`,
          },
          title: trans('MENU.EMPLOYEE'),
          to: '/employees',
        },

        // DRIVERS
        {
          aside: { fontIcon: 'bi-chat-left' },
          children: [
            {
              hasBullet: true,
              title: trans('MENU.DRIVER.LIST'),
              to: '/drivers',
            },
          ],
          icon: '/media/icons/duotune/general/gen049.svg',
          menu: {
            hasArrow: true,
            menuPlacement: 'right-start',
            menuTrigger: `{default:'click', lg: 'hover'}`,
          },
          title: trans('MENU.DRIVER'),
          to: '/drivers',
        },

        // CUSTOMERS
        {
          aside: { fontIcon: 'bi-chat-left' },
          children: [
            {
              hasBullet: true,
              title: trans('MENU.CUSTOMER.LIST'),
              to: '/customers',
            },
          ],
          icon: '/media/icons/duotune/general/gen049.svg',
          menu: {
            hasArrow: true,
            menuPlacement: 'right-start',
            menuTrigger: `{default:'click', lg: 'hover'}`,
          },
          title: trans('MENU.CUSTOMER'),
          to: '/customers',
        },

        // CATALOGUE
        {
          aside: { fontIcon: 'bi-chat-left' },
          children: [
            {
              children: [
                {
                  hasBullet: true,
                  title: trans('MENU.CATALOGUE.SERVICE.LIST'),
                  to: '/catalogues/services',
                },
              ],
              hasBullet: true,
              title: trans('MENU.CATALOGUE.SERVICE'),
              to: '/catalogues/services',
            },
          ],
          icon: '/media/icons/duotune/general/gen049.svg',
          menu: {
            hasArrow: true,
            menuPlacement: 'right-start',
            menuTrigger: `{default:'click', lg: 'hover'}`,
          },
          title: trans('MENU.CATALOGUE'),
          to: '/catalogues',
        },
      ],
      menu: { menuPlacement: 'bottom-start', menuTrigger: 'click' },
      title: trans('MENU.APPS'),
      to: '/apps',
    },
  ];

  useEffect(() => {
    setMenuList(menuList);
  }, []);

  return <>{children}</>;
};

export { MenuInit };
