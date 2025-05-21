//   with post message
window.addEventListener('load', function () {
  console.log('[confCreative]',confCreative);
  // Define your image URL in a variable
  var imageUrl = confCreative.imgSrc;

  // Create the img element
  var img = document.createElement('img');

  // Set its src attribute from the variable
  img.src = imageUrl;

  // Optionally set styling or attributes
  img.alt = '';
  img.style.width = '100%';
  img.style.height = 'auto';

  // Append it to the body or a specific element
  document.body.appendChild(img);


    window.parent.postMessage({ type: 'resizeRequest' }, '*');
});
