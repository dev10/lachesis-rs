Search.setIndex({docnames:["extracted-comments","extracted-comments/lachesis-rs_src_bin_lachesis_server.rs","extracted-comments/lachesis-rs_src_bin_lachesis_tcp.rs","extracted-comments/lachesis-rs_src_bin_ws_client.rs","extracted-comments/lachesis-rs_src_errors.rs","extracted-comments/lachesis-rs_src_event.rs","extracted-comments/lachesis-rs_src_event_event_hash.rs","extracted-comments/lachesis-rs_src_event_event_signature.rs","extracted-comments/lachesis-rs_src_event_parents.rs","extracted-comments/lachesis-rs_src_hashgraph.rs","extracted-comments/lachesis-rs_src_lachesis.rs","extracted-comments/lachesis-rs_src_lachesis_frame.rs","extracted-comments/lachesis-rs_src_lachesis_opera.rs","extracted-comments/lachesis-rs_src_lachesis_parents_list.rs","extracted-comments/lachesis-rs_src_lib.rs","extracted-comments/lachesis-rs_src_node.rs","extracted-comments/lachesis-rs_src_peer.rs","extracted-comments/lachesis-rs_src_printable_hash.rs","extracted-comments/lachesis-rs_src_round.rs","extracted-comments/lachesis-rs_src_server.rs","extracted-comments/lachesis-rs_src_server_heartbeat.rs","extracted-comments/lachesis-rs_src_server_http_handler.rs","extracted-comments/lachesis-rs_src_server_ws_handler.rs","extracted-comments/lachesis-rs_src_server_ws_message.rs","extracted-comments/lachesis-rs_src_swirlds.rs","extracted-comments/lachesis-rs_src_tcp_server.rs","index","introduction"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["extracted-comments.rst","extracted-comments/lachesis-rs_src_bin_lachesis_server.rs.rst","extracted-comments/lachesis-rs_src_bin_lachesis_tcp.rs.rst","extracted-comments/lachesis-rs_src_bin_ws_client.rs.rst","extracted-comments/lachesis-rs_src_errors.rs.rst","extracted-comments/lachesis-rs_src_event.rs.rst","extracted-comments/lachesis-rs_src_event_event_hash.rs.rst","extracted-comments/lachesis-rs_src_event_event_signature.rs.rst","extracted-comments/lachesis-rs_src_event_parents.rs.rst","extracted-comments/lachesis-rs_src_hashgraph.rs.rst","extracted-comments/lachesis-rs_src_lachesis.rs.rst","extracted-comments/lachesis-rs_src_lachesis_frame.rs.rst","extracted-comments/lachesis-rs_src_lachesis_opera.rs.rst","extracted-comments/lachesis-rs_src_lachesis_parents_list.rs.rst","extracted-comments/lachesis-rs_src_lib.rs.rst","extracted-comments/lachesis-rs_src_node.rs.rst","extracted-comments/lachesis-rs_src_peer.rs.rst","extracted-comments/lachesis-rs_src_printable_hash.rs.rst","extracted-comments/lachesis-rs_src_round.rs.rst","extracted-comments/lachesis-rs_src_server.rs.rst","extracted-comments/lachesis-rs_src_server_heartbeat.rs.rst","extracted-comments/lachesis-rs_src_server_http_handler.rs.rst","extracted-comments/lachesis-rs_src_server_ws_handler.rs.rst","extracted-comments/lachesis-rs_src_server_ws_message.rs.rst","extracted-comments/lachesis-rs_src_swirlds.rs.rst","extracted-comments/lachesis-rs_src_tcp_server.rs.rst","index.rst","introduction.rst"],objects:{},objnames:{},objtypes:{},terms:{"final":27,algorithm:27,ani:27,applic:27,aspect:27,asynchron:27,basic:27,behav:27,behavior:27,bft:27,bin:[0,26],block:27,build:27,byzantin:27,can:27,command:27,comment:26,compon:27,comput:27,confirm:27,connect:27,consensu:27,design:27,develop:27,differ:27,easili:27,enabl:27,error:[0,26],etc:27,event:[0,26],event_hash:[0,26],event_signatur:[0,26],everyon:27,extract:26,fault:27,faulti:27,focu:27,frame:[0,26],freedom:27,from:27,guarante:27,handl:27,hashgraph:[0,26],have:27,heartbeat:[0,26],hood:27,http_handler:[0,26],immedi:27,implement:27,includ:27,integr:27,intend:27,introduct:26,known:27,lachesi:0,lachesis_serv:[0,26],lachesis_tcp:[0,26],languag:27,layer:27,leaderless:27,lib:[0,26],logic:27,machin:27,malici:27,mani:27,mobil:27,need:27,network:27,node:[0,26,27],one:27,open:27,opera:[0,26],order:27,other:27,output:27,own:27,p2p:27,parent:[0,26],parents_list:[0,26],particip:27,peer:[0,26,27],plai:27,plug:27,printable_hash:[0,26],process:27,program:27,replic:27,role:27,round:[0,26],same:27,scratch:27,server:[0,26],simpli:27,softwar:27,sourc:27,special:27,src:[0,26],state:27,support:27,swirld:[0,26],tcp_server:[0,26],techniqu:27,thi:27,third:27,time:27,toler:27,under:27,used:27,uses:27,want:27,what:26,who:27,without:27,written:27,ws_client:[0,26],ws_handler:[0,26],ws_messag:[0,26]},titles:["Extracted Comments","lachesis-rs/src/bin/lachesis_server.rs","lachesis-rs/src/bin/lachesis_tcp.rs","lachesis-rs/src/bin/ws_client.rs","lachesis-rs/src/errors.rs","lachesis-rs/src/event.rs","lachesis-rs/src/event/event_hash.rs","lachesis-rs/src/event/event_signature.rs","lachesis-rs/src/event/parents.rs","lachesis-rs/src/hashgraph.rs","lachesis-rs/src/lachesis.rs","lachesis-rs/src/lachesis/frame.rs","lachesis-rs/src/lachesis/opera.rs","lachesis-rs/src/lachesis/parents_list.rs","lachesis-rs/src/lib.rs","lachesis-rs/src/node.rs","lachesis-rs/src/peer.rs","lachesis-rs/src/printable_hash.rs","lachesis-rs/src/round.rs","lachesis-rs/src/server.rs","lachesis-rs/src/server/heartbeat.rs","lachesis-rs/src/server/http_handler.rs","lachesis-rs/src/server/ws_handler.rs","lachesis-rs/src/server/ws_message.rs","lachesis-rs/src/swirlds.rs","lachesis-rs/src/tcp_server.rs","Welcome to Lachesis-rs\u2019s documentation!","Introduction"],titleterms:{bin:[1,2,3],comment:0,document:26,error:4,event:[5,6,7,8],event_hash:6,event_signatur:7,extract:0,frame:11,hashgraph:9,heartbeat:20,http_handler:21,introduct:27,lachesi:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],lachesis_serv:1,lachesis_tcp:2,lib:14,node:15,opera:12,parent:8,parents_list:13,peer:16,printable_hash:17,round:18,server:[19,20,21,22,23],src:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],swirld:24,tcp_server:25,welcom:26,what:27,ws_client:3,ws_handler:22,ws_messag:23}})