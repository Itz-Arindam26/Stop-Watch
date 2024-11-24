let a = document.getElementById('ms');
let b = document.getElementById('se');
let c = document.getElementById('mt');
let d = document.getElementById('hr');
let e = document.getElementById('st');
let f = document.getElementById('so');
let g = document.getElementById('re');
let h = 0;
let i = 0;
let j = 0;
let k = 0;
let l;
function timer() {
    e.style.display = 'none';
    f.style.display = 'block';
    g.style.display = 'none';
    l = setInterval(start, 10);
    function start() {
        h += 1;
        if (h < 10) {
            a.innerHTML = `0${h}`;
        }
        else if (h == 100) {
            h = 0;
            i += 1;
            a.innerHTML = `0${h}`;
            if (i < 10) {
                b.innerHTML = `0${i}`;
            }
            else if (i == 60) {
                i = 0;
                j += 1;
                b.innerHTML = `0${i}`;
                if (j < 10) {
                    c.innerHTML = `0${j}`;
                }
                else if (j == 60) {
                    j = 0;
                    k += 1;
                    c.innerHTML = `0${j}`;
                    if (k < 10) {
                        d.innerHTML = `0${k}`;
                    }
                    else {
                        d.innerHTML = `${k}`;
                    }
                }
                else {
                    c.innerHTML = `${j}`;
                }
            }
            else {
                b.innerHTML = `${i}`;
            }
        }
        else {
            a.innerHTML = `${h}`;
        }
    }
}
e.addEventListener('click', timer);
f.onclick = function () {
    e.style.display = 'block';
    f.style.display = 'none';
    g.style.display = 'block';
    clearInterval(l);
}
g.onclick = function () {
    e.style.display = 'block';
    f.style.display = 'none';
    g.style.display = 'none';
    h, i, j, k = 0, 0, 0, 0;
    a.innerHTML = `00`;
    b.innerHTML = `00`;
    c.innerHTML = `00`;
    d.innerHTML = `00`;
}