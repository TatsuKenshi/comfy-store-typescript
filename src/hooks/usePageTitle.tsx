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
      return (document.title = `Comfy | ${enTitle}`);
    } else {
      return (document.title = `Comfy | ${srTitle}`);
    }
  };
  return { changeTitle };
};

export default usePageTitle;
