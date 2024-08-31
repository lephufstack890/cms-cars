import { useAppDispatch, useAppSelector } from '@/hooks';
import { MenuModel } from '@/models';
import { menuActions, selectMenuList } from '@/modules/menu/core/menuSlice';

function useMenu() {
  const dispatch = useAppDispatch();
  const menuList = useAppSelector(selectMenuList);

  function setMenuList(menuList: MenuModel[]) {
    dispatch(menuActions.setMenuList(menuList));
  }

  return { menuList, setMenuList };
}

export { useMenu };
