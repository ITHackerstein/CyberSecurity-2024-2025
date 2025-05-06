
export default function Login() {
  return (
    <div className="mx-auto my-4 p-4 shadow" style={{ maxWidth: "600px" }}>
      <form method="POST" action="#">
        <div className="form-group mb-2">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="john.doe@example.com" />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;" />
        </div>
        <div className="form-group form-check mb-2">
          <input type="checkbox" className="form-check-input" id="remember-me-check" />
          <label className="form-check-label" htmlFor="remember-me-check">Remember me</label>
        </div>
        <button type="button" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
