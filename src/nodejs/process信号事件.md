# Nodejs Process 信号事件

当 Node.js 进程收到信号时，则将触发信号事件。 有关标准 POSIX 信号名称（例如 'SIGINT'、'SIGHUP' 等）的列表，请参阅 [signal(7)](https://man7.org/linux/man-pages/man7/signal.7.html)。


**信号在 Worker 线程上不可用。**


- **'SIGINT' 所有平台都支持来自终端的 'SIGINT'，通常可以使用 Ctrl+C 生成（但是这是可配置的）。 当启用终端原始模式并使用 Ctrl+C 时不会生成它。**
- **'SIGKILL' 不能安装监听器，它会无条件地终止所有平台上的 Node.js。**
- **发送 SIGINT、SIGTERM、和 SIGKILL 会导致目标进程无条件的终止，之后子进程会报告进程被信号终止。**

- 'SIGUSR1' 由 Node.js 预留以启动调试器。 可以安装监听器，但这样做可能会干扰调试器。
- 'SIGTERM' 和 'SIGINT' 在非 Windows 平台上具有默认的句柄，其在使用代码 128 + signal number 退出之前重置终端模式。 如果这些信号之一安装了监听器，则其默认行为将被删除（Node.js 将不再退出）。
- 'SIGPIPE' 默认情况下忽略。 它可以安装监听器。
- 'SIGHUP' 在 Windows 上是在关闭控制台窗口时生成，在其他平台上是在各种类似条件下生成。 参见 signal(7)。 它可以安装监听器，但是 Node.js 将在大约 10 秒后被 Windows 无条件地终止。 在非 Windows 平台上，SIGHUP 的默认行为是终止 Node.js，但一旦安装了监听器，则其默认行为将被删除。
- 'SIGTERM' Windows 上不支持，可以监听。
- 'SIGBREAK' 在 Windows 上，当按下 Ctrl+Break 时会发送。 在非 Windows 平台上，它可以被监听，但无法发送或生成它。
- 'SIGWINCH' 当调整控制台大小时会发送。 在 Windows 上，这只会发生在当光标移动时写入控制台，或者当在原始模式下使用可读的终端时。

- 'SIGSTOP' 不能安装监听器。
- 'SIGBUS'、'SIGFPE'、'SIGSEGV' 和 'SIGILL'，当没有使用 kill(2) 人为引发时，本质上会使进程处于调用 JS 监听器不安全的状态。 这样做可能会导致进程停止响应。

- 0 可以发送来测试进程是否存在，如果进程存在则没影响，如果进程不存在则抛出错误。
Windows 不支持信号，因此没有等价的使用信号来终止，但 Node.js 提供了一些对 process.kill() 和 subprocess.kill() 的模拟：

- 发送信号 0 可以作为独立于平台的方式来测试进程是否存在。