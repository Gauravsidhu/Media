document.addEventListener('DOMContentLoaded', () => {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  let text2Visible = false;

  window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Adjust the threshold as needed
      const threshold = windowHeight * 0.7;

      if (scrollY > threshold && !text2Visible) {
          text1.classList.remove('text-visible');
          text2.classList.add('text-visible');
          text2Visible = true;
      } else if (scrollY <= threshold && text2Visible) {
          text1.classList.add('text-visible');
          text2.classList.remove('text-visible');
          text2Visible = false;
      }
  });
});
