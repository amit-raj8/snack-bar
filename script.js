let toastBox = document.getElementById("toastBox");

function showToast(messageType) {
  let toast = document.createElement("div");
  toast.classList.add("toast");

  if (messageType === "success") {
    toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> Successfully submitted!';
    
  } else if (messageType === "error") {
    toast.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
   
  } else if (messageType === "invalid") {
    toast.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!';
    
  }

  if(messageType.includes('error')){
    toast.classList.add('error');
  }
  if(messageType.includes('invalid')){
    toast.classList.add('invalid');
  }


  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
