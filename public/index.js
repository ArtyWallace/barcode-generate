const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const imgCont = document.querySelector('#imgCont');

btn.addEventListener('click', async () => {
  const data = { value: input.value };
  try {
    const res = await fetch('http://localhost:4000/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const barcode = await res.json();
    const img = document.createElement('img');
    img.setAttribute('src', `${barcode.barcode}`);
    img.classList.add('img');
    imgCont.append(img);
  } catch (err) {
    console.log(err);
  }
});