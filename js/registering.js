(function() {


// Register to IoTtalk
var df_list = [];
// for(var i=1; i<=9; ++i) {
//     df_list.push('Keypad' + i);
//     df_list.push('Knob' + i);
//     df_list.push('Switch' + i);
// }

df_list.push('AC_Switch');
IoTtalk.register(mac, {
    'dm_name': 'AC_Remote', // Remote_control
    'is_sim': false,
    'df_list': df_list,
}, function(ret) {
    $('body > main').css('opacity', '1');
    console.log(ret)
    ret = JSON.parse(ret);
    // window.d_name = ret.d_name;
    console.log('registered: ', ret.d_name);
    $('body > main > section > header > span > small').html(ret.d_name);
});

// Detach when browser close
function detach() {
    IoTtalk.detach(mac);
}
window.onunload = detach;
window.onbeforeunload = detach;
window.onclose = detach;
window.onpagehide = detach;


})();
