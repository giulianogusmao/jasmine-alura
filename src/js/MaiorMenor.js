function MaiorMenor() {
    let menor;
    let maior;

    let clazz = {
        encontra(nums) {
            try {
                if (nums)
                    [menor] = [maior] = nums;

                nums.forEach(num => {
                    if (num < menor) menor = num;
                    if (num > maior) maior = num;
                });
            } catch (e) {
                console.erro(e);
            }
        },
        getMenor() {
            return menor;
        },
        getMaior() {
            return maior;
        }
    }

    return clazz;
};