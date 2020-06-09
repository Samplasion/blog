---
title: "How to get a nice-looking terminal"
slug: how-to-get-a-nice-looking-terminal
comment_id: 5d949225819a4002bbb042e3
date: 2019-10-03T20:34:30.000Z
excerpt: "If you use the terminal on a regular basis, you know it looks kinda bad. But it's quite understandable, because the shells were made to be useful, not nice-looking. If you want to have a nice terminal, though, nothing can stop you."
image: "https://images.unsplash.com/photo-1524741978410-350ba91a70d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
tags: 
 - "Apple"
 - "Computer"
 - "Mac"
 - "Linux"
---

<p>If you use the terminal on a regular basis, you know it looks kinda bad. But it's quite understandable, because the shells were made to be useful, not nice-looking. If you want to have a nice terminal, though, nothing can stop you. </p><p>We'll be installing Z-Shell, Oh-My-Zsh and powerlevel9k to customize the look and feel of our terminal.</p><h4 id="step-1-z-shell">Step 1: Z-Shell</h4><blockquote><strong>Note</strong>: Since macOS 10.15 Catalina, Apple changed the default shell to <code>zsh</code>, so if you happen to be on macOS 10.15 (or greater, for the future), you can skip this section.</blockquote><p><code>zsh</code> is packed with a ton of features; to name a few:</p><ul><li>Automatic cd: Just type the name of the directory</li><li>Recursive path expansion: For example “/u/lo/b” expands to “/usr/local/bin”</li><li>Spelling correction and approximate completion: If you make a minor mistake typing a directory name, ZSH will fix it for you</li></ul><h5 id="linux">Linux</h5><p>To install <code>zsh</code>, open a window of the Terminal and type:</p><pre><code class="language-bash">$ sudo apt-get install zsh
# or
$ sudo yum install zsh
# or
$ sudo zypper install zsh
# depending on the installed package manager</code></pre><p>After the installation, <code>zsh</code> will be ready.</p><h5 id="macos">macOS</h5><p>To install <code>zsh</code> on macOS, first make sure it isn't installed. If it isn't, or if it's too outdated, you can use Homebrew to install/update it. (To check <code>zsh</code>'s version run <code>zsh --version</code>.)</p><p>If you don't have Homebrew you can run:</p><!--kg-card-begin: html--><pre class="command-line language-bash"><code class=" language-bash">ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code></pre><!--kg-card-end: html--><p>After that, you can run:</p><!--kg-card-begin: html--><pre class="command-line language-bash" data-output="1,3-4"><code class=" language-bash"># install from scratch
brew install zsh

# update
brew upgrade zsh</code></pre><!--kg-card-end: html--><p>to install/update <code>zsh</code>.</p><h4 id="step-2-oh-my-zsh">Step 2: Oh-My-Zsh</h4><p>Oh-My-Zsh is a package manager for <code>zsh</code>. It includes various plugins out of the box.<br>To install OMZ (that's it I'm gonna abbreviate it), you have to run Z-Shell v4.3.9 or higher. If your version is lower, update it.</p><p>You have to have <code>git</code> and either <code>curl</code> or <code>wget</code> installed in order to install OMZ. On Linux, you can simply run:</p><!--kg-card-begin: html--><pre class="command-line language-bash"><code class=" language-bash">sudo apt-get install git curl</code></pre><!--kg-card-end: html--><p>and it'll install the missing packages, skipping the up-to-date ones and updating the outdated ones. On macOS, we'll install <code>curl</code>. To install it, you'll have to download and install the <strong>command line tools</strong>, which you can install by typing:</p><!--kg-card-begin: html--><pre class="command-line language-bash"><code class=" language-bash">xcode-select --install</code></pre><!--kg-card-end: html--><p>If they're already installed, the command will display <code>xcode-select: error: command line tools are already installed, use "Software Update" to install updates</code> and exit. If they aren't installed, a popup window will be shown asking you to download the command line tools. Just accept it and when the download completes, you'll be able to run <code>git</code> by restarting the terminal.</p><p>Now that you satisfied the requirements, you'll need to download and install OMZ. To do so, run the following commands: if you're using <code>wget</code>, run:</p><!--kg-card-begin: html--><pre class="command-line language-bash"><code class=" language-bash">sh -c "$(wget -O- https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"</code></pre><!--kg-card-end: html--><p>Otherwise, if you're using <code>curl</code>, run:</p><!--kg-card-begin: html--><pre class="command-line language-bash"><code class=" language-bash">sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"</code></pre><!--kg-card-end: html--><p>If everything goes well, we'll be prompted to change our shell to <code>zsh</code> by default.</p><h4 id="part-3-powerlevel9k">Part 3: powerlevel9k</h4><p>In my experience, powerlevel9k (p9k for the laziest) is the best zsh theme out there. It's fully customizable, it's nice looking and it's modularized, meaning you can add, remove and mix&amp;match modules, as well as adding your owns.</p><p>Since we installed OMZ, we can use it to install p9k, as such:</p><!--kg-card-begin: html--><pre class="command-line language-bash"><code class=" language-bash">git clone https://github.com/bhilburn/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k</code></pre><!--kg-card-end: html--><p>Once you've installed it, you'll have to install the fonts. In my personal experience, the best ones for p9k are Nerd-Fonts. Since there are a variety of different fonts, and the choosing of one is personal taste, I'll link to the official GitHub page for the complete list:</p><figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://github.com/ryanoasis/nerd-fonts"><div class="kg-bookmark-content"><div class="kg-bookmark-title">ryanoasis/nerd-fonts</div><div class="kg-bookmark-description">Iconic font aggregator, collection, &amp;amp; patcher. 3,600+ icons, 40+ patched fonts: Hack, Source Code Pro, more. Glyph collections: Font Awesome, Material Design Icons, Octicons, &amp;amp; more - ryano...</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://github.githubassets.com/favicon.ico"><span class="kg-bookmark-author">ryanoasis</span><span class="kg-bookmark-publisher">GitHub</span></div></div><div class="kg-bookmark-thumbnail"><img src="https://repository-images.githubusercontent.com/27574418/e3fca880-c1ad-11e9-8588-78686ecb4ca0"></div></a></figure><p>To install one, <a href="https://github.com/ryanoasis/nerd-fonts#patched-fonts">go here</a> and pick one. Click on the name, then enter `complete` and download the ones that you're interested in (there's a handy readme explaining what each does.)</p><p>Now, you can customize your <code>.zshrc</code> to make it look however you want. Here's my <code>.zshrc</code> for instance:</p><pre><code class="language-bash">source  ~/powerlevel9k/powerlevel9k.zsh-theme

export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="powerlevel9k/powerlevel9k"
POWERLEVEL9K_MODE="nerdfont-complete"
POWERLEVEL9K_PROMPT_ON_NEWLINE=true
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(os_icon user dir_writable dir vcs)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(status command_execution_time root_indicator background_jobs time disk_usage ram)
#POWERLEVEL9K_MULTILINE_LAST_PROMPT_PREFIX="%(?:%{$fg_bold[green]%}➜ :%{$fg_bold[red]%}➜ )"
#POWERLEVEL9K_MULTILINE_FIRST_PROMPT_PREFIX=""
#POWERLEVEL9K_USER_ICON="\uF415" # 
POWERLEVEL9K_ROOT_ICON="\uF09C"
#POWERLEVEL9K_SUDO_ICON=$'\uF09C' # 
POWERLEVEL9K_TIME_FORMAT="%D&#123;%H:%M}"
#POWERLEVEL9K_VCS_GIT_ICON='\uF408 '
#POWERLEVEL9K_VCS_GIT_GITHUB_ICON='\uF408 '

ZSH_DISABLE_COMPFIX=true

ENABLE_CORRECTION="true"
COMPLETION_WAITING_DOTS="true"

plugins=(
  git
  iterm2
  macports
  man
  osx
  python
  composer
  zsh-syntax-highlighting
#   zsh-autosuggestions
)

source $ZSH/oh-my-zsh.sh

alias suroot='sudo -E -s'

# source ~/.bash_profile

if [ -f ~/.bash_profile ]; then
    . ~/.bash_profile;
fi

export DEFAULT_USER="$USER"

# source /Users/samplasion/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
# source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
source $(dirname $(gem which colorls))/tab_complete.sh

ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=244"

alias colors "~/colors.sh"
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
alias ls='colorls'

source ~/.iterm2_shell_integration.zsh

alias mountesp="sudo mkdir /Volumes/ESP &amp;&amp; sudo mount -t msdos /dev/disk0s1 /Volumes/ESP"</code></pre><p>which is a modified version of <a href="https://github.com/Powerlevel9k/powerlevel9k/wiki/Show-Off-Your-Config#hacckss-config">hacck's config</a>.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="{{ site.baseurl }}/assets/images/2019/10/Schermata-2019-10-03-alle-22.25.23.png" class="kg-image" alt="My terminal"><figcaption>This is how it looks like</figcaption></figure><p>Notice the line <code>ZSH_THEME="powerlevel9k/powerlevel9k"</code>. It's important you use it to set the theme to p9k.<br>Also notice the line <code>POWERLEVEL9K_MODE="nerdfont-complete"</code>; it allows p9k to recognize the fonts and to use the right icons.</p><blockquote><strong>Note</strong>: I highly recommend installing iTerm 2 if you're on macOS. It's a simple terminal utility replacement. It's more customizable than the stock terminal.</blockquote><h4 id="final-considerations">Final considerations</h4><p>In this post we got from stock to p9k in almost no time. If you know some usefuls tips and tricks, don't hesitate to write them down in the comments. See you in the next post!</p>