function scrollToHelper(detail){

    const {scroll: scrollDiv} = detail.target.dataset

    const element = document.querySelector(scrollDiv); 
    if(!element)
      return;

    const y = element.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y - document.querySelector(".navbar-container").clientHeight,
      behavior: 'smooth'
    });
}

export default scrollToHelper
