//   with post message
window.addEventListener('load', function () {
    console.log('[confCreative]',confCreative);


    // Create the <a> element
    const link = document.createElement('a');
    link.href = confCreative.clickUrlUnesc+confCreative.adUrl;
    link.style.display = 'block';
    link.target = '_blank';

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


    document.documentElement.style.height = '100%';
    document.documentElement.style.display = 'flex';
    document.documentElement.style.alignItems = 'center';
    document.documentElement.style.justifyContent = 'center';
    document.body.style.width = '100%';
    
    image.onload = () => {
        const width = image.clientWidth;
        const height = width * 9 / 16;
        if(height > 0){
            image.height = `${height}`;
        }
    };
  
    window.parent.postMessage({ type: 'resizeRequest' }, '*');
  });
