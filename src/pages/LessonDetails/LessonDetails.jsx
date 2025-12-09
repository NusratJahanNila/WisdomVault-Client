import React, { useState, useEffect } from 'react';
import { 
  FaHeart, FaBookmark, FaFlag, FaShareAlt, FaUserCircle, 
  FaCalendar, FaEye, FaEdit, FaLock, FaCrown, FaComment,
  FaClock, FaGlobe, FaLockOpen, FaArrowLeft
} from 'react-icons/fa';
import { useParams, useNavigate, Link } from 'react-router';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';
import LessonCard from './LessonCard'; // Import your LessonCard component

const LessonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock data for the lesson (replace with API call)
  const [lesson, setLesson] = useState({
    id: '1',
    title: 'The Power of Saying No: A Journey to Self-Respect',
    description: `Learning to set boundaries was the most liberating lesson of my 30s. I used to say yes to everything out of fear of disappointing others, but it left me drained and resentful.

    It started with small things - taking on extra work, attending events I didn't want to, always being the "available" friend. Over time, I realized my constant availability was being taken for granted, and my own needs were being neglected.
    
    The turning point came during a particularly stressful week at work. I was already working 60-hour weeks when my manager asked me to lead another project. Something in me snapped. For the first time, I said, "I'm at capacity right now and can't take on more without compromising quality."
    
    To my surprise, my manager respected my honesty. She found someone else for the project, and my work-life balance improved dramatically. That moment taught me that boundaries aren't walls - they're gates that let good things in while keeping the draining things out.
    
    Now, I practice saying no with kindness and clarity. I've learned that "No" is a complete sentence. The people who matter respect my boundaries, and I have more energy for the things I truly care about.`,
    category: 'Personal Growth',
    emotionalTone: 'Empowering',
    accessLevel: 'premium', // Change to 'free' to test non-premium view
    visibility: 'public',
    featuredImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    createdAt: '2024-02-15T10:30:00Z',
    updatedAt: '2024-02-20T14:45:00Z',
    estimatedReadingTime: '5 min read',
    creator: {
      id: 'user_001',
      name: 'Sarah Chen',
      photo: 'https://randomuser.me/api/portraits/women/32.jpg',
      totalLessons: 24,
      isPremium: true
    },
    likesCount: 142,
    favoritesCount: 89,
    viewsCount: 333324,
    isLiked: false,
    isFavorited: false,
    likes: ['user_002', 'user_003'],
    tags: ['boundaries', 'self-care', 'assertiveness', 'work-life-balance']
  });

  // User state (replace with actual auth context)
  const [currentUser,] = useState({
    id: 'current_user_001',
    isPremium: false, // Change to true to test premium access
    isLoggedIn: true
  });

  const [comments, setComments] = useState([
    { id: 1, user: { name: 'Alex Johnson', photo: 'https://randomuser.me/api/portraits/men/22.jpg' }, text: 'This resonated so much! I\'ve been struggling with saying no at work.', timestamp: '2 days ago', likes: 5 },
    { id: 2, user: { name: 'Maria Garcia', photo: 'https://randomuser.me/api/portraits/women/45.jpg' }, text: 'Beautifully written. The part about boundaries being gates really hit home.', timestamp: '1 day ago', likes: 3 },
    { id: 3, user: { name: 'David Kim', photo: 'https://randomuser.me/api/portraits/men/33.jpg' }, text: 'Thank you for sharing this. It\'s exactly what I needed to hear today.', timestamp: '5 hours ago', likes: 1 }
  ]);

  const [newComment, setNewComment] = useState('');
  const [isReporting, setIsReporting] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const [similarLessons, setSimilarLessons] = useState([]);

  // Check if content should be locked
  const isLocked = lesson.accessLevel === 'premium' && !currentUser.isPremium;

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Format numbers with K abbreviation
  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count;
  };

  // Handle like toggle
  const handleLike = () => {
    if (!currentUser.isLoggedIn) {
      alert('Please log in to like this lesson');
      navigate('/login');
      return;
    }
    
    setLesson(prev => ({
      ...prev,
      isLiked: !prev.isLiked,
      likesCount: prev.isLiked ? prev.likesCount - 1 : prev.likesCount + 1
    }));
  };

  // Handle favorite toggle
  const handleFavorite = () => {
    if (!currentUser.isLoggedIn) {
      alert('Please log in to save favorites');
      navigate('/login');
      return;
    }
    
    setLesson(prev => ({
      ...prev,
      isFavorited: !prev.isFavorited,
      favoritesCount: prev.isFavorited ? prev.favoritesCount - 1 : prev.favoritesCount + 1
    }));
  };

  // Handle report
  const handleReport = () => {
    if (!currentUser.isLoggedIn) {
      alert('Please log in to report content');
      navigate('/login');
      return;
    }
    
    setIsReporting(true);
  };

  const submitReport = () => {
    if (!reportReason) {
      alert('Please select a reason');
      return;
    }
    
    // Here you would make API call to save report
    console.log('Reporting lesson:', {
      lessonId: lesson.id,
      reporterId: currentUser.id,
      reason: reportReason,
      timestamp: new Date().toISOString()
    });
    
    alert('Thank you for your report. Our team will review it shortly.');
    setIsReporting(false);
    setReportReason('');
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !currentUser.isLoggedIn) {
      if (!currentUser.isLoggedIn) {
        alert('Please log in to comment');
        navigate('/login');
      }
      return;
    }
    
    const newCommentObj = {
      id: comments.length + 1,
      user: { 
        name: 'You', 
        photo: 'https://randomuser.me/api/portraits/men/1.jpg' 
      },
      text: newComment,
      timestamp: 'Just now',
      likes: 0
    };
    
    setComments([newCommentObj, ...comments]);
    setNewComment('');
  };

  // Load similar lessons (mock data)
  useEffect(() => {
    // This would be an API call in real app
    const mockSimilarLessons = [
      { id: 2, title: 'Setting Healthy Boundaries in Relationships', category: 'Relationships', emotionalTone: 'Empowering', accessLevel: 'free', creator: { name: 'Dr. Amanda Lee', photo: 'https://randomuser.me/api/portraits/women/28.jpg' } },
      { id: 3, title: 'The Art of Self-Care', category: 'Personal Growth', emotionalTone: 'Motivational', accessLevel: 'free', creator: { name: 'Michael Chen', photo: 'https://randomuser.me/api/portraits/men/44.jpg' } },
      { id: 4, title: 'Work-Life Balance in Modern World', category: 'Career', emotionalTone: 'Reflective', accessLevel: 'premium', creator: { name: 'Sarah Johnson', photo: 'https://randomuser.me/api/portraits/women/67.jpg' } },
      { id: 5, title: 'Finding Your Voice', category: 'Personal Growth', emotionalTone: 'Empowering', accessLevel: 'free', creator: { name: 'Robert Kim', photo: 'https://randomuser.me/api/portraits/men/55.jpg' } },
    ];
    setSimilarLessons(mockSimilarLessons);
  }, []);

  // If locked, show upgrade banner
  if (isLocked) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-teal-50 p-4">
        <div className="container mx-auto max-w-4xl pt-10">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="btn btn-ghost mb-8"
          >
            <FaArrowLeft className="mr-2" />
            Back to Lessons
          </button>

          {/* Locked Content */}
          <div className="card bg-white shadow-2xl">
            <div className="card-body items-center text-center py-16">
              <div className="mb-6">
                <FaLock className="text-7xl text-amber-500 mb-4" />
                <FaCrown className="text-5xl text-amber-500" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Premium Wisdom Unlocked
              </h2>
              
              <div className="bg-gray-100 rounded-xl p-6 mb-8 w-full max-w-2xl">
                <div className="blur-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {lesson.description.substring(0, 200)}...
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="badge badge-info">{lesson.category}</span>
                    <span className="badge badge-warning">{lesson.emotionalTone}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 max-w-xl">
                This premium lesson contains deep insights and actionable advice from experienced mentors. 
                Upgrade to access exclusive content and accelerate your personal growth.
              </p>
              
              <div className="space-y-4 w-full max-w-md">
                <button 
                  onClick={() => navigate('/pricing')}
                  className="btn btn-warning btn-lg w-full text-white gap-2"
                >
                  <FaCrown />
                  Upgrade to Premium - ৳1500 Lifetime
                </button>
                <button 
                  onClick={() => navigate('/public-lessons')}
                  className="btn btn-outline w-full"
                >
                  Browse Free Lessons
                </button>
              </div>
              
              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-bold text-amber-800 mb-2">Premium Benefits:</h4>
                <ul className="text-sm text-amber-700 text-left">
                  <li>✅ Access all premium lessons</li>
                  <li>✅ Create premium content</li>
                  <li>✅ Ad-free experience</li>
                  <li>✅ Priority support</li>
                  <li>✅ Advanced analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="btn btn-ghost mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back to Lessons
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2">
            {/* Lesson Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`badge ${lesson.accessLevel === 'premium' ? 'badge-warning' : 'badge-success'} gap-1`}>
                  {lesson.accessLevel === 'premium' && <FaCrown />}
                  {lesson.accessLevel === 'premium' ? 'Premium' : 'Free'}
                </span>
                <span className="badge badge-info">{lesson.category}</span>
                <span className="badge badge-secondary">{lesson.emotionalTone}</span>
                <span className="badge badge-outline gap-1">
                  <FaGlobe />
                  {lesson.visibility}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {lesson.title}
              </h1>
              
              {/* Featured Image */}
              {lesson.featuredImage && (
                <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={lesson.featuredImage} 
                    alt={lesson.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              )}
            </div>

            {/* Lesson Content */}
            <article className="prose prose-lg max-w-none mb-8">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {lesson.description}
              </div>
              
              {/* Tags */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  {lesson.tags?.map((tag, index) => (
                    <span key={index} className="badge badge-outline">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Interaction Buttons */}
            <div className="flex flex-wrap gap-3 mb-8 p-4 bg-white rounded-xl shadow">
              <button 
                onClick={handleLike}
                className={`btn ${lesson.isLiked ? 'btn-error' : 'btn-outline'} gap-2`}
              >
                <FaHeart className={lesson.isLiked ? 'fill-current' : ''} />
                {lesson.isLiked ? 'Liked' : 'Like'} ({formatCount(lesson.likesCount)})
              </button>
              
              <button 
                onClick={handleFavorite}
                className={`btn ${lesson.isFavorited ? 'btn-warning' : 'btn-outline'} gap-2`}
              >
                <FaBookmark className={lesson.isFavorited ? 'fill-current' : ''} />
                {lesson.isFavorited ? 'Saved' : 'Save'} ({formatCount(lesson.favoritesCount)})
              </button>
              
              <button 
                onClick={handleReport}
                className="btn btn-outline btn-error gap-2"
              >
                <FaFlag />
                Report
              </button>
              
              {/* Share Buttons */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-outline gap-2">
                  <FaShareAlt />
                  Share
                </div>
                <div tabIndex={0} className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-64">
                  <div className="flex gap-3 justify-center">
                    <FacebookShareButton url={window.location.href} quote={lesson.title}>
                      <FacebookIcon size={40} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={window.location.href} title={lesson.title}>
                      <TwitterIcon size={40} round />
                    </TwitterShareButton>
                    <LinkedinShareButton url={window.location.href} title={lesson.title}>
                      <LinkedinIcon size={40} round />
                    </LinkedinShareButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FaComment />
                Comments ({comments.length})
              </h3>
              
              {/* Comment Form */}
              {currentUser.isLoggedIn ? (
                <form onSubmit={handleCommentSubmit} className="mb-8">
                  <textarea 
                    className="textarea textarea-bordered w-full mb-3"
                    placeholder="Share your thoughts on this lesson..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows="3"
                  />
                  <button type="submit" className="btn btn-primary">
                    Post Comment
                  </button>
                </form>
              ) : (
                <div className="alert alert-info mb-6">
                  <FaComment />
                  <span>
                    Please <Link to="/login" className="link">log in</Link> to join the conversation
                  </span>
                </div>
              )}
              
              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-b pb-6 last:border-0">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                          <img src={comment.user.photo} alt={comment.user.name} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">{comment.user.name}</h4>
                        <p className="text-sm text-gray-500">{comment.timestamp}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{comment.text}</p>
                    <div className="mt-3">
                      <button className="btn btn-ghost btn-xs gap-1">
                        <FaHeart className="text-red-400" />
                        {comment.likes}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="space-y-6">
            {/* Lesson Metadata */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg mb-4">Lesson Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCalendar className="text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Created</p>
                      <p className="font-medium">{formatDate(lesson.createdAt)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FaEdit className="text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Last Updated</p>
                      <p className="font-medium">{formatDate(lesson.updatedAt)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FaClock className="text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Reading Time</p>
                      <p className="font-medium">{lesson.estimatedReadingTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FaGlobe className="text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Visibility</p>
                      <p className="font-medium capitalize">{lesson.visibility}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Card */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-16 h-16 rounded-full">
                      <img src={lesson.creator.photo} alt={lesson.creator.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{lesson.creator.name}</h4>
                    <p className="text-sm text-gray-500">Wisdom Contributor</p>
                    {lesson.creator.isPremium && (
                      <span className="badge badge-warning badge-xs mt-1">Premium Creator</span>
                    )}
                  </div>
                </div>
                
                <div className="stats shadow mb-4">
                  <div className="stat">
                    <div className="stat-title">Lessons</div>
                    <div className="stat-value text-lg">{lesson.creator.totalLessons}</div>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate(`/profile/${lesson.creator.id}`)}
                  className="btn btn-outline btn-sm w-full"
                >
                  View All Lessons by {lesson.creator.name.split(' ')[0]}
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg mb-4">Engagement</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaHeart className="text-red-500" />
                      <span>Likes</span>
                    </div>
                    <span className="font-bold">{formatCount(lesson.likesCount)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaBookmark className="text-amber-500" />
                      <span>Favorites</span>
                    </div>
                    <span className="font-bold">{formatCount(lesson.favoritesCount)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaEye className="text-blue-500" />
                      <span>Views</span>
                    </div>
                    <span className="font-bold">{formatCount(lesson.viewsCount)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Lessons */}
            {similarLessons.length > 0 && (
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-lg mb-4">Similar Lessons</h3>
                  <div className="space-y-4">
                    {similarLessons.slice(0, 3).map((similarLesson) => (
                      <Link 
                        key={similarLesson.id}
                        to={`/lesson/${similarLesson.id}`}
                        className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                          {similarLesson.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{similarLesson.creator.name}</span>
                          <span className={`badge ${similarLesson.accessLevel === 'premium' ? 'badge-warning' : 'badge-info'} badge-xs`}>
                            {similarLesson.accessLevel}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link to={`/public-lessons?category=${lesson.category}`} className="link link-primary text-sm mt-3">
                    View more {lesson.category} lessons →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Lessons Full Section */}
        {similarLessons.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">More Lessons You Might Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarLessons.slice(0, 6).map((similarLesson) => (
                <LessonCard 
                  key={similarLesson.id}
                  lesson={similarLesson}
                  isPremiumUser={currentUser.isPremium}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Report Modal */}
      {isReporting && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Report This Lesson</h3>
            <p className="text-sm text-gray-600 mb-4">Please select a reason for reporting:</p>
            
            <select 
              className="select select-bordered w-full mb-4"
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
            >
              <option value="">Select a reason</option>
              <option value="inappropriate">Inappropriate Content</option>
              <option value="hate_speech">Hate Speech or Harassment</option>
              <option value="misinformation">Misleading or False Information</option>
              <option value="spam">Spam or Promotional Content</option>
              <option value="sensitive">Sensitive or Disturbing Content</option>
              <option value="other">Other</option>
            </select>
            
            {reportReason === 'other' && (
              <textarea 
                className="textarea textarea-bordered w-full mb-4"
                placeholder="Please provide details..."
                rows="3"
              />
            )}
            
            <div className="modal-action">
              <button 
                onClick={() => setIsReporting(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button 
                onClick={submitReport}
                className="btn btn-error"
                disabled={!reportReason}
              >
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonDetails;