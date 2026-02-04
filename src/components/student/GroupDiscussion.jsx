import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import socket from "./Socket";

const GroupDiscussion = () => {
  const [gdMessages, setGdMessages] = useState([]);
  const [gdInput, setGdInput] = useState("");
  const [sdmUsers, setSdmusers] = useState([]);
  const [body, setBody] = useState(true);

  const gdEndRef = useRef(null);
  const CURRENT_USER_ID = 1;

  /* Toggle user list */
  const toggleUserList = () => {
    setBody(prev => !prev);
  };

  /* Fetch users */
  useEffect(() => {
    axios
      .get("http://localhost:8081/fetchUsers", { withCredentials: true })
      .then(res => setSdmusers(res.data.data || []));
  }, []);

  /* Fetch old messages once */
  useEffect(() => {
    axios
      .get("http://localhost:8081/fetchMessages", { withCredentials: true })
      .then(res => setGdMessages(res.data.data || []));
  }, []);

  /* Socket listeners */
  useEffect(() => {
    socket.on("chat:receive", (data) => {
      setGdMessages(prev => [...prev, data]);
    });

    return () => {
      socket.off("chat:receive");
    };
  }, []);

  /* Auto scroll */
  useEffect(() => {
    gdEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [gdMessages]);

  /* Send message */
  const handleSendMessage = async () => {
    if (!gdInput.trim()) return;

    const messagePayload = {
      userId: CURRENT_USER_ID,
      message: gdInput,
      time: new Date().toISOString()
    };

    // 1. Send real-time message
    socket.emit("chat:send", messagePayload);

    // 2. Save message to DB
    try {
      await axios.post(
        "http://localhost:8081/saveMessage",
        {
          recipientId: 10,
          messageType: "text",
          messageContent: gdInput
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.error("Failed to save message", err);
    }

    setGdInput("");
  };

  return (
    <div className="gd-wrapper">
      <div className="gd-top">
        <span onClick={toggleUserList}>Toggle</span>
        <h2 className="gd-title">Student Group Discussion</h2>
      </div>

      <div className="gd-body">
        {body ? (
          <>
            <div className="gd-chat-box">
              {gdMessages.map((msg, index) => (
                <div key={index} className="gd-message">
                  <div
                    className={`gd-message-box ${
                      msg.userId === CURRENT_USER_ID ? "gd-own-message" : ""
                    }`}
                  >
                    <div className="gd-message-user">{msg.userId}</div>
                    <div className="gd-message-text">
                      {msg.message || msg.messageContent}
                    </div>
                    <div className="gd-message-time">
                      {msg.time || msg.sentAt}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={gdEndRef} />
            </div>

            <div className="gd-input-area">
              <input
                value={gdInput}
                onChange={(e) => setGdInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message"
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        ) : (
          <div className="gd-user-list">
            {sdmUsers.map((user, index) => (
              <div key={index}>
                {user.firstName} {user.lastName}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupDiscussion;


























// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import socket from "./Socket";

// const GroupDiscussion = () => {
  
//   const [gdMessages, setGdMessages] = useState([]);
//   const [gdInput, setGdInput] = useState("");
//   const gdEndRef = useRef(null);
//   const messageField = useRef('');
//   const [body, setBody] = useState(true);



//   const toggleUserList = function() {
//     if(body) {
//       setBody(false)
//     } else {
//       setBody(true)
//     }
//   }
  
//   function open(e) {
//     e = e.currentTarget;
//     if (e.classList.value.match("active-icon")) {
//       e.classList.remove("active-icon");
//     } else {
//       e.classList.toggle("active-icon");
//     }
//   }
  
//   const [sdmUsers, setSdmusers] = useState();

//   useEffect(()=>{
//     console.log("Fetching sdm users...")
//     const result = axios.get("http://localhost:8081/fetchUsers")
//     result.then((res)=> {
//       setSdmusers(res.data.data);
//       // console.log("Fetched sdm users: ",JSON.stringify(res.data.data.length))
//     })
//   }, [])

//   useEffect(()=>{
//     console.log("Fetching sdm users...")
//     const result = axios.get("http://localhost:8081/fetchMessages")
//     result.then((res)=> {
//       setGdMessages(res.data.data);
//       console.log("Fetched sdm fetchMessages: ",JSON.stringify(res.data.data))
//     })
//   }, [])


//   // Initial demo messages
//   useEffect(() => {
//     setGdMessages([
//       {
//         user: "Amit",
//         text: "Hello everyone! 👋",
//         time: "10:30 AM",
//       },
//       {
//         user: "Sneha",
//         text: "When is the Full Stack assignment due?",
//         time: "10:32 AM",
//       },
//       {
//         user: "Digambar",
//         text: "It is due this Friday.",
//         time: "10:33 AM",
//       },
//     ]);
//   }, []);

//   // Auto-scroll
//   useEffect(() => {
//     gdEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [gdMessages]);

//   const handleSendMessage = () => {
//     if (!gdInput.trim()) return;
//     socket.emit("chat message", gdInput);
//     setGdInput("");
//     axios.post("http://localhost:8081/saveMessage",
//       // senderId, recipientId, messageType, messageContent
//       {
//         recipientId: 10,
//         messageType: 'text',
//         messageContent: messageField.current.value
//       },
//       {withCredentials: true,}
//     ).then((res) => {
//       console.log(res);
//     });
//   };



//   useEffect(() => {
//     socket.emit("chat:join", "room-1");
    
//     socket.emit("chat:send", {
//       roomId: "room-1",
//       userId: "123",
//       message: "Hello"
//     });
    
//     socket.on("chat:receive", (data) => {
//       console.log(data);
//     });

//   }, []);

//   const sendMessage = () => {
//   };

//   // chat socket end
//   return (
//     <div className="gd-wrapper">
//       <div className="gd-top">
//         <div className="gd-pop-btn">
//           <span className="B1" onClick={toggleUserList}>
//             <div className="icon" onClick={open}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </span>
//         </div>
//         <h2 className="gd-title">Student Group Discussion</h2>
//       </div>

//       <div className="gd-body">
//         {(body)?
//           <> 
//             <div className="gd-chat-box">
//               {gdMessages.map((msg, index) => (
//                 <div className="gd-message">
//                     <div key={index} className={`gd-message-box ${ msg.senderId === 1 ? "gd-own-message" : ""}`}>
//                     <div className="gd-message-user">{msg.senderId}</div>
//                     <div className="gd-message-text">{msg.messageContent}</div>
//                     <div className="gd-message-time">
//                       <span>{msg.sentAt}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <div ref={gdEndRef} />
//             </div>

//             <div className="gd-input-area">
//               <input
//                 type="text"
//                 className="gd-input"
//                 placeholder="Type your message..."
//                 value={gdInput}
//                 ref={messageField}
//                 onChange={(e) => setGdInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//               />
//               <button className="gd-send-btn" onClick={handleSendMessage}>
//                 Send
//               </button>
//             </div>
//           </>
//           :<>
//             <div className="gd-user-list">
                
//               {/* <div key={index} className={`gd-message-box ${ msg.user === currentStudent ? "gd-own-message" : ""}`}> */}
//               {sdmUsers.map((data, index) => (

//                 <div key={index} className="gd-user-list-component">
//                   <div className="img-cont">
//                     <img src="" alt="" />
//                   </div>
//                   <div className="gd-details">
//                     <div className="name">{data.firstName + " " + data.lastName}</div>
//                     <div className="id">@{data.userName}</div>
//                   </div>
//                 </div>
//               ))}
//               {/* <div className="gd-user-list-component">
//                 <div className="img-cont">
//                   <img src="" alt="" />
//                 </div>
//                 <div className="gd-details">
//                   <div className="name">Digambar Kumbhar</div>
//                   <div className="id">@artist.dk_</div>
//                 </div>
//               </div> */}
//             </div>
//             User List
//           </>
//         }
//       </div>
//     </div>
//   );
// };

// export default GroupDiscussion;

