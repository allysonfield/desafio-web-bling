const errorNotificationMiddleware = () => store => next => action => {
  next(action)
}

export default errorNotificationMiddleware
