﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SMP.Models.Repositoryes
{
    public class TeamRepository
    {
        static ModelContainer cont = new ModelContainer();

        public TeamRepository(ModelContainer _cont)
        {
            cont = _cont;
        }

        public List<Team> GetTeams()
        {
            return cont.Team.OrderBy(p => p.IdTeam).ToList();
        }

        public Team GetTeam(int personId, int projectId)
        {
            return cont.Team.ToList().Find(t => t.Person.IdPerson == personId && t.Project.IdProject == projectId);
        }

        public List<Team> GetTeamsByPerson(int personId)
        {
            return cont.Team.ToList().FindAll(t => t.Person.IdPerson == personId);
        }

        public List<Team> GetTeamsByProject(int projectId)
        {
            return cont.Team.ToList().FindAll(t => t.Project.IdProject == projectId);
        }

        public Team AddTeam(int personId, int projectId)
        {
            Team t = new Team
            {
                Person = cont.Person.FirstOrDefault(p => p.IdPerson == personId),
                Project = cont.Project.FirstOrDefault(p => p.IdProject == projectId),
            };
            cont.Team.Add(t);
            return t;
        }
    }
}