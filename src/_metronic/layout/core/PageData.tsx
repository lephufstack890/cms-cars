import React, { createContext, FC, useContext, useEffect, useState } from 'react';

import { WithChildren } from '@/_metronic/helpers';

export interface PageLink {
  isActive: boolean;
  path: string;
  title: string;
  isSeparator?: boolean;
}

export interface PageDataContextModel {
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => void;
  setPageDescription: (_description: string) => void;
  setPageTitle: (_title: string) => void;
  pageBreadcrumbs?: Array<PageLink>;
  pageDescription?: string;
  pageTitle?: string;
}

const PageDataContext = createContext<PageDataContextModel>({
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => {
    /*empty*/
  },
  setPageDescription: (_description: string) => {
    /*empty*/
  },
  setPageTitle: (_title: string) => {
    /*empty*/
  },
});

const PageDataProvider: FC<WithChildren> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState<string>('');
  const [pageDescription, setPageDescription] = useState<string>('');
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<Array<PageLink>>([]);
  const value: PageDataContextModel = {
    pageBreadcrumbs,
    pageDescription,
    pageTitle,
    setPageBreadcrumbs,
    setPageDescription,
    setPageTitle,
  };
  return <PageDataContext.Provider value={value}>{children}</PageDataContext.Provider>;
};

function usePageData() {
  return useContext(PageDataContext);
}

type Props = {
  breadcrumbs?: Array<PageLink>;
  description?: string;
};

const PageTitle: FC<Props & WithChildren> = ({ children, description, breadcrumbs }) => {
  const { setPageTitle, setPageDescription, setPageBreadcrumbs } = usePageData();
  useEffect(() => {
    if (children) {
      setPageTitle(children.toString());
    }
    return () => {
      setPageTitle('');
    };
  }, [children]);

  useEffect(() => {
    if (description) {
      setPageDescription(description);
    }
    return () => {
      setPageDescription('');
    };
  }, [description]);

  useEffect(() => {
    if (breadcrumbs) {
      setPageBreadcrumbs(breadcrumbs);
    }
    return () => {
      setPageBreadcrumbs([]);
    };
  }, [breadcrumbs]);

  return <></>;
};

const PageDescription: FC<WithChildren> = ({ children }) => {
  const { setPageDescription } = usePageData();
  useEffect(() => {
    if (children) {
      setPageDescription(children.toString());
    }
    return () => {
      setPageDescription('');
    };
  }, [children]);
  return <></>;
};

export { PageDataProvider, PageDescription, PageTitle, usePageData };
