const regExps = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    password: /^.{6,}$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
};

export default regExps;
