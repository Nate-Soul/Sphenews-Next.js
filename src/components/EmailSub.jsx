

const EmailSub = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="bg-secondary-500 dark:bg-main-500 text-dark dark:text-white shadow p-8 rounded-lg flex flex-col gap-y-6">
          <header className="text-center">
            <h5 className="text-2xl font-bold capitalize mb-3">Join Our Exclusive List</h5>
            <p>Join with <span className="font-semibold">2000+</span> authors and readers and start getting instant feedbacks </p>
          </header>
          <form>
            <div className="grid grid-cols-3 gap-3 justify-center">
              <div className="col-span-2">
                <input type="email" placeholder="Enter email address" className="form-control w-full" />
              </div>
              <div className="col-span-1">
                <button className="btn btn-main w-full">
                  Join Now
                </button>
              </div>
            </div>
          </form>
          <footer className="text-center">
            <p><span className="bi-info-circle"></span> We do not share or sell your email address publicly</p>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default EmailSub
