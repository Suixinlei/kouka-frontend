import { FC } from 'react';

// 导航栏组件
const Navbar: FC = () => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800">笑斌的个人网站</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">首页</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">关于</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">联系方式</a>
        </div>
      </div>
    </div>
  </nav>
);

// 头部横幅组件
const Hero: FC = () => (
  <div className="bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          欢迎访问我的个人网站
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          分享技术经验，记录个人成长
        </p>
      </div>
    </div>
  </div>
);

// 关于部分组件
const About: FC = () => (
  <div id="about" className="bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">关于我</h2>
        <div className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
          <p>
            您好，我是笑斌，一名热爱技术的开发者。本网站用于分享个人技术心得和学习经验，
            希望能够与大家互相交流学习。
          </p>
        </div>
      </div>
    </div>
  </div>
);

// 联系方式组件
const Contact: FC = () => (
  <div id="contact" className="bg-white py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">联系方式</h2>
        <div className="mt-8 text-lg text-gray-600">
          <p>邮箱：joshuasui@163.com</p>
          <p className="mt-2">地址：中国</p>
        </div>
      </div>
    </div>
  </div>
);

// 页脚组件
const Footer: FC = () => (
  <footer className="bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center text-gray-500">
        <p>© 2024 kouka.tech 版权所有</p>
        <p className="mt-2">
        <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2024139704号-1</a>	</p>
      </div>
    </div>
  </footer>
);

// 主页面组件
const HomePage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;