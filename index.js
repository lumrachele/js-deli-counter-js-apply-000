function takeANumber (line, name){
  var i =0
for (let i = 0; i < line.length; i++) {
  line.push (`${name}`)
}
return (`Welcome, ${name}. You are number ${i+1} in line.`)
}


function nowServing  (katzDeliLine) {
  var shifted = katzDeliLine.shift()
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!")
  }
  else {
  return (`Currently serving ${shifted}.`)
  }
}

function currentLine (line) {
  var i = 0
  if (line.length === 0) {
    return ("The line is currently empty.")
  }
  else {
    for (let i = 0; i < line.length; i++) {
      return (`The line is currently: ${i+1}. ${line[i]}`)
    }
  }
}
