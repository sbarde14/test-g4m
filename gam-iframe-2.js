//   with post message
window.addEventListener('load', function () {
    console.log('[confCreative]',confCreative);


    // Create the <a> element
    const link = document.createElement('a');
    link.href = confCreative.clickUrlUnesc+'&adurl='+'https://www.google.it';

    // Create the <img> element
    const image = document.createElement('img');
    image.src = confCreative.imgSrc;
    image.alt = '';
    image.style.width = '100%';
    image.style.height = 'auto';
    image.style.objectFit = 'cover';

    // Append the <img> inside the <a>
    link.appendChild(image);

    // Add the <a> to the page inside the container div
    document.body.appendChild(link);


    image.onload = () => {
        const width = image.clientWidth;
        const height = width * 9 / 16;
        image.style.height = `${height}px`;
    };
  
    window.parent.postMessage({ type: 'resizeRequest' }, '*');
  });
