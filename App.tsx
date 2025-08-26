
import React, { useState } from 'react';

// Simple SVG Icons for questionnaire options
const DogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 011-1h.5a1.5 1.5 0 000-3H6a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1v-.5z" /></svg>;
const CatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>;
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" /></svg>;
const HairIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>;


const App: React.FC = () => {
  const [view, setView] = useState('home'); // 'home', 'questionnaire', or 'explore'
  const [questionStep, setQuestionStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const [hobbies, setHobbies] = useState<string[]>(['Creative Coding', 'Synthwave Music', 'Pixel Art', 'Retro Gaming']);
  const [currentHobby, setCurrentHobby] = useState('');

  const questions = [
    {
      question: "First things first...",
      options: [
        { text: "Dog Person", icon: <DogIcon />, value: "dog" },
        { text: "Cat Person", icon: <CatIcon />, value: "cat" },
      ]
    },
    {
      question: "What's your vibe today?",
      options: [
        { text: "Dark & Mysterious", icon: <MoonIcon />, value: "dark" },
        { text: "Bright & Bubbly", icon: <SunIcon />, value: "bright" },
      ]
    },
    {
      question: "And your hair is...",
      options: [
        { text: "Shades of Brown/Black", icon: <HairIcon />, value: "dark_hair" },
        { text: "Something Else Amazing", icon: <HairIcon />, value: "other_hair" },
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questionStep]: value }));
    if (questionStep < questions.length - 1) {
      setQuestionStep(questionStep + 1);
    } else {
      setView('explore');
    }
  };
  
  const handleAddHobby = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentHobby.trim() && !hobbies.includes(currentHobby.trim())) {
      setHobbies([currentHobby.trim(), ...hobbies]);
      setCurrentHobby('');
    }
  };

  const getPersonalizedWelcome = () => {
    if(answers[0] === 'dog' && answers[1] === 'dark' && answers[2] === 'dark_hair') {
      return "Knew it! A fellow dog-loving, dark-vibe enthusiast with amazing hair. Welcome!";
    }
    return "Glad we could connect. Welcome to my world!";
  }

  const renderHome = () => (
    <>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
        Hello
      </h1>
      <p className="mt-2 text-2xl sm:text-4xl font-light tracking-wide animate-shimmer">
        i am bella
      </p>
      <p className="mt-6 text-lg text-gray-400 font-light max-w-md mx-auto">
        Welcome to my page! I'm excited to share my world with you.
      </p>
      <button
        onClick={() => setView('questionnaire')}
        className="mt-8 py-3 px-8 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
      >
        Explore More
      </button>
    </>
  );

  const renderQuestionnaire = () => {
    const currentQuestion = questions[questionStep];
    return (
      <div className="animate-fade-in-up">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
          {currentQuestion.question}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="group relative p-6 bg-white/10 rounded-2xl border border-white/20 text-white text-center transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105 hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {option.icon}
                <span className="font-semibold text-lg">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderExplore = () => (
    <>
      <p className="text-purple-300 font-medium mb-4 italic">
        {getPersonalizedWelcome()}
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
        About Me
      </h2>
      
      <div className="mt-6 text-left w-full max-w-lg mx-auto bg-white/5 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="font-semibold text-lg text-purple-300">Bio</h3>
        <p className="mt-2 text-gray-300 font-light text-sm">
            I'm a digital explorer with a passion for blending art and technology. My journey is all about creating beautiful, interactive experiences that spark joy and curiosity. When I'm not coding, you can find me lost in the neon-drenched worlds of retro games or crafting pixel art.
        </p>
      </div>

      <div className="mt-4 text-left w-full max-w-lg mx-auto">
        <h3 className="font-semibold text-lg text-purple-300 mb-3">My Hobbies</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {hobbies.map((hobby, index) => (
            <span key={index} className="bg-purple-500/20 text-purple-200 text-xs font-medium px-3 py-1.5 rounded-full animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
              {hobby}
            </span>
          ))}
        </div>
        <form onSubmit={handleAddHobby} className="w-full flex gap-2">
          <input
            type="text"
            value={currentHobby}
            onChange={(e) => setCurrentHobby(e.target.value)}
            placeholder="Add a hobby..."
            className="flex-grow bg-white/10 border border-white/20 rounded-full py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            aria-label="Enter a new hobby"
          />
          <button
            type="submit"
            className="py-2 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-gray-900"
            aria-label="Add hobby"
          >
            Add
          </button>
        </form>
      </div>

      <button
        onClick={() => { setView('home'); setQuestionStep(0); setAnswers({}); }}
        className="mt-8 text-sm text-gray-400 hover:text-white transition-colors duration-300"
      >
        &larr; Go Back to Start
      </button>
    </>
  );

  const renderContent = () => {
    switch(view) {
      case 'home':
        return renderHome();
      case 'questionnaire':
        return renderQuestionnaire();
      case 'explore':
        return renderExplore();
      default:
        return renderHome();
    }
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2s"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4s"></div>
      
      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-2xl text-center p-8 sm:p-12 transition-all duration-500 ease-in-out transform hover:scale-105 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/20">
        <div key={view + questionStep}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
