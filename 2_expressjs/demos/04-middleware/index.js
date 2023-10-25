
async function getData() {
    try {
        const data = await fetch('http://127.0.0.1:4000');
        // const obj = await data.body;
        console.log(data);
    } catch(err) {
        console.log(err);
    }
    
};

getData();