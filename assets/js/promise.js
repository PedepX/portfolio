async function carregar() {
    const [u, p] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
    ]);
    console.log(u);
    console.log(p);
}