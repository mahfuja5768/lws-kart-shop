const LoginForm = () => {
  return (
    <form action="#" method="post" autocomplete="off">
      <div class="space-y-2">
        <div>
          <label htmlFor="email" class="text-gray-600 mb-2 block">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="youremail.@domain.com"
          />
        </div>
        <div>
          <label htmlFor="password" class="text-gray-600 mb-2 block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="*******"
          />
        </div>
      </div>
      <div class="flex items-center justify-between mt-6">
        <div class="flex items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            class="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label htmlFor="remember" class="text-gray-600 ml-3 cursor-pointer">
            Remember me
          </label>
        </div>
        <a href="#" class="text-primary">
          Forgot password
        </a>
      </div>
      <div class="mt-4">
        <button
          type="submit"
          class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
