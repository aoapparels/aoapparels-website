console.log("A&O Apparels Website Loaded Successfully");
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const speed = 25;

  const updateCount = () => {
    const increment = Math.ceil(target / 100);

    if(count < target){
      count += increment;
      if(count > target){
        count = target;
      }

      counter.innerText = count;
      setTimeout(updateCount, speed);
    }else{
      counter.innerText = target;
    }
  };

  updateCount();
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const counter = entry.target;
      startCounter(counter);
      observer.unobserve(counter);
    }
  });
}, {
  threshold: 0.5
});

counters.forEach(counter => {
  observer.observe(counter);
});