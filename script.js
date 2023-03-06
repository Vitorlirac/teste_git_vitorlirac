function func1() {
  return new Promise((resolve) =>{
    setTimeout(() => {
      console.log('esperou 1')
      resolve()
    }, 1000)
  })
}

async function func2() {
  await func1()
  console.log('esperou 2')
  console.log('esperou 3')
}

func2()