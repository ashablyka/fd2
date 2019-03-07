
    let s = 0;
    render(() => {
        document.body.textContent = (+s).toString();
    });
    function render (actions) {
        requestAnimationFrame( () => {
            actions();
            render(actions);
        });
    }

