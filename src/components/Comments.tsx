import { useState, useEffect } from 'react';

function Comments() {
  const [visibleComments, setVisibleComments] = useState(10);
  const [newComment, setNewComment] = useState('');
  const [userComments, setUserComments] = useState([]);
  const [autoCommentIndex, setAutoCommentIndex] = useState(0);
  
  const comments = [
    {
      id: 1,
      name: "Elizabeth Amber",
      avatar: "./images/1.jpg",
      text: "I just received my McDonald's gift card, and I'm thrilled! Thank you, Shop Smart Program!",
      isUserComment: false
    },
    {
      id: 2,
      name: "Michael Johnson",
      avatar: "./images/2.jpg",
      text: "Wow! Got my $250 gift card in just 2 days. This program is absolutely legit!",
      isUserComment: false
    },
    {
      id: 3,
      name: "Sarah Williams",
      avatar: "./images/3.jpg",
      text: "At first I was skeptical, but Shop Smart really delivered! Already planning my McDonald's feast 😊",
      isUserComment: false
    },
    {
      id: 4,
      name: "David Chen",
      avatar: "./images/4.jpg",
      text: "Amazing program! The questions were super easy and my gift card arrived faster than expected.",
      isUserComment: false
    },
    {
      id: 5,
      name: "Jessica Martinez",
      avatar: "./images/5.jpg",
      text: "Just finished the survey and received confirmation! Can't wait for my McDonald's card to arrive!",
      isUserComment: false
    },
    {
      id: 6,
      name: "Robert Taylor",
      avatar: "./images/6.jpg",
      text: "This is the real deal! My friends thought I was crazy but I'm holding a $250 McDonald's gift card right now!",
      isUserComment: false
    },
    {
      id: 7,
      name: "Amanda Davis",
      avatar: "./images/7.jpg",
      text: "Shop Smart Program changed my week! Free McDonald's for months thanks to this amazing opportunity.",
      isUserComment: false
    },
    {
      id: 8,
      name: "Kevin Brown",
      avatar: "./images/8.jpg",
      text: "I've tried many programs before but this one actually works. Got my gift card and it's 100% valid!",
      isUserComment: false
    },
    {
      id: 9,
      name: "Lisa Thompson",
      avatar: "./images/9.jpg",
      text: "Three simple questions and boom - $250 McDonald's gift card! My kids are going to love this!",
      isUserComment: false
    },
    {
      id: 10,
      name: "Mark Wilson",
      avatar: "./images/10.jpg",
      text: "Received my gift card yesterday and already used it! Shop Smart Program is absolutely fantastic!",
      isUserComment: false
    }
  ];

  const autoComments = [
    {
      id: 'auto-1',
      name: "Rachel Green",
      avatar: "./images/11.jpg",
      text: "I was hesitant at first, but Shop Smart delivered exactly what they promised. Highly recommend!",
      isUserComment: false
    },
    {
      id: 'auto-2',
      name: "James Miller",
      avatar: "./images/12.jpg", 
      text: "Best decision I made this month! The gift card works perfectly at all McDonald's locations.",
      isUserComment: false
    }
  ];

  // Load user comments from memory on component mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('userComments') || '[]');
    setUserComments(savedComments);
  }, []);

  // Auto-add comments when component is visible
  useEffect(() => {
    const timer = setInterval(() => {
      if (autoCommentIndex < autoComments.length) {
        setAutoCommentIndex(prev => prev + 1);
      }
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, [autoCommentIndex, autoComments.length]);

  // Save user comments to memory
  const saveUserComments = (comments: any) => {
    setUserComments(comments);
    localStorage.setItem('userComments', JSON.stringify(comments));
  };

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        name: "You",
        avatar: "./images/user.png",
        text: newComment,
        isUserComment: true
      };
      const updatedComments = [comment, ...userComments];
      saveUserComments(updatedComments);
      setNewComment('');
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  // Combine user comments with predefined comments and auto comments
  const displayedAutoComments = autoComments.slice(0, autoCommentIndex);
  const allComments = [...userComments, ...displayedAutoComments, ...comments];

  const showMoreComments = () => {
    setVisibleComments(prev => Math.min(prev + 5, allComments.length));
  };

  return (
    <section className="w-full px-[15px] mt-8">
      <h2 className="text-black text-start text-[16px] font-extrabold">
        Read what others say about our program:
      </h2>
      <div className="flex justify-between mt-2">
        <div className="text-black text-[16px] font-semibold">130 comments</div>
        <div className="flex items-center gap-3">
          <button className="text-[14px] font-normal">Sort by</button>
          <button className="bg-[#F7F7F7] border-1 border-[#D9D9D9] w-[64px] h-[29px] text-[12px] font-medium rounded-[5px]">
            Newest
          </button>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#D9D9D9] mt-3"></div>
      <div className="flex gap-2 mt-3.5">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 pt-2 pb-2 px-[10px] border-[#D9D9D9] border-1 rounded-[8px]"
        />
        <button
          onClick={addComment}
          disabled={!newComment.trim()}
          className="bg-[#385AC9] text-white px-4 py-2 rounded-[8px] text-[14px] font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#2948B8] transition-colors"
        >
          Post
        </button>
      </div>
      
      {/* users comments */}
      <div className="w-full flex flex-col items-center mt-6 pb-10">
        {allComments.slice(0, visibleComments).map((comment: any, index) => (
          <div 
            key={comment.id} 
            className={`w-full flex gap-3 rounded-[10px] pb-3 pt-[2px] mb-4 transition-all duration-500 ${
              displayedAutoComments.includes(comment) && index === 0 ? 'animate-fade-in' : ''
            }`}
          >
            <div>
              <img 
                src={comment.avatar} 
                alt="user avatar" 
                className="min-w-[52px] h-[52px] rounded-full object-cover" 
              />
            </div>
            <div className="flex flex-col mt-4">
              <div className={`text-[16px] font-extrabold ${comment.isUserComment ? 'text-[#FF6B35]' : 'text-[#385AC9]'}`}>
                {comment.name}
                {comment.isUserComment && <span className="text-[12px] font-normal text-gray-500 ml-2">(Your comment)</span>}
              </div>
              <div className="text-[14px] font-semibold">
                {comment.text}
              </div>
            </div>
          </div>
        ))}
        
        {visibleComments < allComments.length && (
          <button 
            onClick={showMoreComments}
            className="bg-[#F7F7F7] border border-[#D9D9D9] px-6 py-2 rounded-[8px] text-[14px] font-medium text-black hover:bg-[#E7E7E7] transition-colors mt-4"
          >
            Show more comments
          </button>
        )}
      </div>
      
      <style>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Comments;