

const EmailSub = () => {
  return (
    <section className="py-10 dark:bg-main-900">
      <div className="container">
        <div className="bg-secondary-500 text-dark dark:bg-main-800 dark:text-white shadow p-8 rounded-lg flex flex-col gap-y-6">
          <header className="text-center">
            <h5 className="text-2xl font-bold capitalize mb-3">Join Our Exclusive Community</h5>
            <p>Connect with <span className="font-semibold">over 2,000</span> authors and readers and receive instant feedback. </p>
          </header>
          <form>
            <div className="grid grid-cols-3 gap-3 justify-center">
              <div className="col-span-3 sm:col-span-2">
                <input type="email" placeholder="Enter your email address" className="form-control w-full" />
              </div>
              <div className="col-span-3 sm:col-span-1">
                <button className="btn btn-main w-full">
                  Join Now
                </button>
              </div>
            </div>
          </form>
          <footer className="text-center">
            <p className="text-sm"><span className="bi-info-circle"></span> Rest assured, we value your privacy and do not share or sell your email address to anyone else.</p>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default EmailSub
