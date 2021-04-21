const iconImport = async (name) => {
  const { react48 } = await import("./assets/icons")
  return react48
  // const targetIcon = iconBundle[name]
  // return targetIcon
}

export default iconImport;