//SCOPES
function func() {
    let a = 10;         //local scope
    var b = 20;         //global scope
    const c = 30;       // local scope
    if (a > 1 || b > 1 || c > 1) {
        let a1 = 100;
        var b1 = 200
        const c1 = 300;
        console.log("Scope block", a1, b1, c1);
    }
    console.log("Scope global", b1);
    // value of b1 can only be accessed here because of global scope 
}
func()