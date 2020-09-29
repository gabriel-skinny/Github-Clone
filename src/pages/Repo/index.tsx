import React from 'react';
import { Link } from "react-router-dom"
import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/guilhermerodz"}>
            guilhermerodz
        </Link>

        <span> / </span>

        <Link className={"reponame"} to={"guilhermerodz/youtube-content"}>
          youtube-content
        </Link>
      </Breadcrumb>

      <p>Container all of my Youtube code lessons</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://www.notion.so/To-Do-list-daily-05dd2e34030c42be92940aa85ba95a1d"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;