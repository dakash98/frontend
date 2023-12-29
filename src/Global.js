export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

 export function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


