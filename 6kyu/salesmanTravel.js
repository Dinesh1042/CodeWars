// Salesman's Travel

function travel(r, zipcode) {
  const addressArr = r.split(",");
  let regex = /\d{5}/;

  if (
    !addressArr.find((item) => item.includes(zipcode)) ||
    !regex.test(zipcode)
  )
    return zipcode + ":/";

  let finalAddress = [];
  let result = ``;
  const codes = [];

  addressArr.forEach((address) =>
    address.includes(zipcode) ? finalAddress.push(address) : false
  );

  finalAddress.forEach((add) => codes.push(add.split(" ")[0]));

  const regexZipCode = new RegExp(zipcode, "g");

  finalAddress = finalAddress
    .join(",")
    .replace(regexZipCode, ``)
    .replace(/[0-9]/g, "")
    .split(",")
    .map((item) => item.trim())
    .join(",");

  result = `${zipcode}:${finalAddress}/${codes.join(",")}`;

  return result;
}

travel(ad, "AA 45522"); // "AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670";
