function minRemoveToMakeValid(s: string): string {
    const x = s.split("")
    const stack :string[] = []
    const indexes:number[] = []

    for (let i = 0; i < x.length; i++) {
        if (x[i] == '('  ) {
            stack.push(x[i])
            indexes.push(i)
        } else if (x[i] == ')'  ) {
            console.log(stack)
            if (stack.length > 0) {
                stack.pop()
                indexes.pop()
            } else {
                x[i] = ""
                     
            }
        }

    }

    for (let i = 0; i < indexes.length; i++) {
        x[indexes[i]] = ""
    }


    return x.join("")
};

console.log(minRemoveToMakeValid("))((")) // Output: "ab"