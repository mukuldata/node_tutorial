// OS module:
const os=require('os');
// console.log(os);

// Important functions:
// console.log(os.arch());         //x64

// Free RAM available:
// console.log(os.freemem()/(1024*1024*1024));         //769138688 in bytes

// Total memory in system:
// console.log(os.totalmem()/(1024*1024*1024));

// Hostname:
// console.log(os.hostname());

//Platform:
// console.log(os.platform());

// userinfo:
console.log(os.userInfo());

// Output:
// {
//     uid: -1,
//     gid: -1,
//     username: '91868',
//     homedir: 'C:\\Users\\91868',
//     shell: null
//   }

