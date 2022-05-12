function contar() {
    let ini = document.getElementById('txti'),
        fim = document.getElementById('txtf'),
        passo = document.getElementById('txtp'),
        res = document.getElementById('res')


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        ini.value = ''
        fim.value = ''
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar sem todos os valores!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value),
            f = Number(fim.value),
            p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1:')
            for (let c = i; c <= f; c += 1) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else if (i > f) {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    } res.innerHTML += `\u{1F3C1}`
}