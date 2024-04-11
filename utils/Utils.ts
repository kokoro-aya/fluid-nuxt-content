export const groupBy = <A, B>(list: A[], criteria: (arg0: A) => B): { key: B, group: A[] }[] =>   {
  let ret: { key: B, group: A[] }[] = []
  for (let elem of list) {
    let groupEval = criteria(elem)
    let entry = ret.find(s => s.key === groupEval)
    if (entry !== undefined) {
      entry.group.push(elem)
    } else {
      ret.push({ key: groupEval, group: [elem] })
    }
  }
  return ret
}
