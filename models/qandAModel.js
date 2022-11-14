const reader =require("../reader/QandAReader");

exports.find = () => {
    return reader.read()
}