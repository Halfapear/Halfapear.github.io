# GitHub Profile Backup

这个目录保存 GitHub 主页 README 的快照，放在 Pages 仓库里只是为了有一个稳定的备份点。它不会出现在主页导航里，也不影响 `index.html`、`assets/`、`image/` 的正常访问。

## 版本

| 版本 | 日期 | 文件 | 说明 |
|---|---|---|---|
| v1.0 | 2026-11-27 之前 | [v1.0/README.md](v1.0/README.md) | 优化前的原始版：getloli 计数 + top-langs + stats，585 字节 |
| v2.0 | 2026-11-28 | [v2.0/README.md](v2.0/README.md) | 当前视觉版：猫娘计数 + Visitors/Followers + stats + productive-time + 语言甜甜圈 + 技术栈，1135 字节 |

## 恢复

把对应版本的 `README.md` 复制到 `Halfapear/Halfapear` 仓库根目录，提交即可。

## 为什么放这里不会影响 Pages

`Halfapear.github.io` 是纯静态 HTML 仓库，没有 `_config.yml`，也没有 GitHub Actions 构建。`profile-backup/` 只是根目录下的一个普通子目录，Pages 会把它当静态文件发布，不会改 `index.html`、`assets/`、`image/`，也不会影响现有页面路由。新增文件最多触发一次 Pages 重新发布，现有页面内容不变。
