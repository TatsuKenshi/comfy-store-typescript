type usePageTitleProps = {
  language: string;
  srTitle: string;
  enTitle: string;
};

const usePageTitle = () => {
  const changeTitle = ({
    language,
    srTitle,
    enTitle,
  }: usePageTitleProps): string => {
    if (language === "en") {
      return (document.title = `Akerman | ${enTitle}`);
    } else {
      return (document.title = `Akerman | ${srTitle}`);
    }
  };
  return { changeTitle };
};

export default usePageTitle;
